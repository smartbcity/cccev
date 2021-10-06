import { useCallback, useMemo, useState } from 'react'
import { PopUp, PopUpAction } from '@smartb/g2-layout'
import { Select, Option } from '@smartb/g2-forms'
import { useTheme } from '@smartb/g2-themes'
import { Typography } from '@mui/material'
import { EvidenceTypeList } from 'components'

interface addEvidencePopUpProps {
    open: boolean
    errorMessage?: string
    onClose: () => void
    onValidate: (evidenceTypeId: string) => void
    evidences: EvidenceTypeList[]
}

export const AddEvidencePopUp = (props: addEvidencePopUpProps) => {
    const { open, onClose, onValidate, errorMessage, evidences } = props
    const theme = useTheme()
    const [evidenceTypeId, setEvidenceTypeId] = useState<string | undefined>(undefined)

    const onValidateMemoized = useCallback(
        () => evidenceTypeId && onValidate(evidenceTypeId),
        [onValidate, evidenceTypeId],
    )

    const onCloseMemoized = useCallback(
        () => {
            setEvidenceTypeId(undefined)
            onClose()
        },
        [onClose],
    )


    const actions = useMemo((): PopUpAction[] => errorMessage ? [{
        key: "addEvidencePopUp-ok",
        label: "Ok",
        onClick: onCloseMemoized
    }] 
    :
    [{
        key: "addEvidencePopUp-cancel",
        label: "Cancel",
        onClick: onCloseMemoized,
        variant: "text"
    },
    {
        key: "addEvidencePopUp-confirm",
        label: "Confirm",
        onClick: onValidateMemoized,
        disabled: !evidenceTypeId
    }], [onCloseMemoized, onValidateMemoized, evidenceTypeId, errorMessage])

    const selectOptions = useMemo(() => {
        const options: Option[] = []
        evidences.forEach((evidenceTypeList) => evidenceTypeList.specifiesEvidenceType.forEach((evidence) => {
            if (!evidence.isAdded) {
                options.push({
                    key: evidence.id,
                    label: evidence.label
                }) 
            }
        }))
        return options
    }, [evidences])

    return (
        <PopUp
            open={open}
            onClose={onCloseMemoized}
            actions={actions}
        >
            {errorMessage ? (
                <Typography color={theme.colors.error}>
                    {errorMessage}
                </Typography>
            ) : (
                <>
                    <Typography>
                        Choose the evidence you are adding:
                    </Typography>
                    <Select
                        options={selectOptions}
                        value={evidenceTypeId}
                        onChangeValue={setEvidenceTypeId}
                    />
                </>
            )
            }
        </PopUp>
    )
}
