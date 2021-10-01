import React, { useCallback, useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
import pdf from "./Rapport d'alternance de Basile Savouret chez SmartB de fin de parcours.pdf"
import { LoadingPdf } from './LoadingPdf'
import { styled } from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'

const StyledInfiniteScroll = styled(InfiniteScroll)({
    marginTop: "-20px",
    paddingTop: "20px",
    boxSizing: "border-box",
    "& .pdfPage": {
        padding: "20px 0"
    }
})

export const PdfDisplayer = () => {

    const [numPages, setNumPages] = useState<number>(0);
    const [pages, setPages] = useState<React.ReactNode[]>([])

    const onDocumentLoadSuccess = useCallback(
        ({ numPages }: { numPages: number }) => {
            setNumPages(numPages)
            const page: React.ReactNode[] = []
            page.push(
                <Page
                    width={460}
                    key={`page_${1}`}
                    pageNumber={1}
                    className="pdfPage"
                />
            )
            if (numPages >= 2) {
                page.push(
                    <Page
                        width={460}
                        key={`page_${2}`}
                        pageNumber={2}
                        className="pdfPage"
                    />
                )
            }
            setPages(page)
        },
        [],
    )

    const onLoadMore = useCallback(
        () => {
            setPages(oldPages => {
                const index = oldPages.length
                const oldPagesCopy = [...oldPages]
                for (let i = 0; i < 5; i++) {
                    if (numPages < index + i + 1) break;
                    oldPagesCopy.push(
                        <Page
                            width={460}
                            key={`page_${index + i + 1}`}
                            pageNumber={index + i + 1}
                            className="pdfPage"
                        />
                    )
                }
                return oldPagesCopy
            })
        },
        [numPages],
    )

    return (
        <StyledInfiniteScroll
            dataLength={pages.length}
            next={onLoadMore}
            hasMore={pages.length + 1 < numPages}
            loader={<LoadingPdf />}
            height={"100vh"}
            scrollThreshold={"1300px"}
            className="PdfDisplayer-infiniteScroll"
        >
            <Document
                file={pdf}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<LoadingPdf />}
            >
                {pages}
            </Document>
        </StyledInfiniteScroll>
    )
}
