import { Box } from '@mui/material'
import { EvidenceTypeDTO } from 'datahub'
import { useCallback, useState } from 'react'
import { FileRejection, useDropzone } from "react-dropzone"
import { AddEvidencePopUp } from './AddEvidencePopUp'

interface DropzoneProps {
    evidenceTypeAdded?: string
    setEvidenceTypeAdded: (evidenceTypeId?: string | undefined) => void
    evidenceTypeMapped?: Map<string, EvidenceTypeDTO>
}

export const Dropzone = (props: DropzoneProps) => {
    const { setEvidenceTypeAdded, evidenceTypeAdded, evidenceTypeMapped } = props

    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)
    const [lastAddedFile, setLastAddedFile] = useState<File | undefined>(undefined)
    const [openPopup, setOpenPopup] = useState(false)

    const onClosePopup = useCallback(
        () => {
            setOpenPopup(false)
            setErrorMessage(undefined)
        },
        [],
    )

    const onValidatePopup = useCallback(
        (evidenceTypeId: string) => {
            setOpenPopup(false)
            console.log("file added:")
            console.log(lastAddedFile)
            console.log("bounded to:")
            console.log(evidenceTypeId)
        },
        [lastAddedFile],
    )


    const onUpload = useCallback(
        (acceptedFiles: File[]) => {
            if (!!evidenceTypeAdded) {
                console.log("file added:")
                console.log(acceptedFiles[0])
                console.log("bounded to:")
                console.log(evidenceTypeAdded)
                setEvidenceTypeAdded()
            } else {
                setLastAddedFile(acceptedFiles[0])
                setOpenPopup(true)
            }
        },
        [evidenceTypeAdded, setEvidenceTypeAdded],
    )

    const onReject = useCallback(
        (files: FileRejection[]) => {
            setErrorMessage("Votre pdf n'est pas valide")
            files.forEach((file) => {
                if (file.errors[0].code === 'file-too-large')
                    setErrorMessage('La taille de votre fichier est supérieur à la limite de 10Mo')
                if (file.errors[0].code === 'too-many-files')
                    setErrorMessage("Vous avez inséré plus d'un fichier en même temps")
                if (file.errors[0].code === 'file-invalid-type')
                    setErrorMessage("Votre fichier n'est pas au format pdf")
            })
            setOpenPopup(true)
        },
        [],
    )

    const { getRootProps, getInputProps } = useDropzone({
        multiple: false,
        accept: 'application/pdf',
        maxSize: 10000000,
        noClick: true,
        onDropAccepted: onUpload,
        onDropRejected: onReject
    })

    return (
        <>
            <Box
                sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    right: 0,
                }}
                {...getRootProps()}
            >
                <input id="evidenceBar-dropzoneInput" {...getInputProps()} />
            </Box>
            <AddEvidencePopUp evidenceTypeMapped={evidenceTypeMapped} errorMessage={errorMessage} open={openPopup} onClose={onClosePopup} onValidate={onValidatePopup} />
        </>
    )
}
