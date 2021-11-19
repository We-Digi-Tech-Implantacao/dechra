import React, {
    useState,
    useEffect
} from "react"
import {
    SearchBarInner,
    SearchBarButton,
    SearchBarOverlay,
    SearchBarContainer
} from "../../GlobalStyles/styles"
import styles from "./styles.css"

export default function SearchBar(props) {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        document.querySelector("html").style.overflowX = "hidden"
        if (open) {
            const input = document.querySelector('.fideli-store-theme-0-x-autoCompleteOuterContainer .vtex-styleguide-9-x-input')
            if (input) {
                setTimeout(() => {
                    input.focus()
                }, 500)
            }
        }
    }, [open])

    return (
        <>
            <SearchBarContainer open={open}>
                <SearchBarButton open={open} onClick={() => setOpen(!open)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M39.5325 37.1778L29.5924 27.2376C32.3012 23.9247 33.633 19.6973 33.3124 15.4299C32.9918 11.1626 31.0432 7.18166 27.8698 4.31067C24.6963 1.43968 20.5408 -0.101748 16.2627 0.0052167C11.9847 0.112182 7.91135 1.85936 4.88536 4.88536C1.85936 7.91135 0.112182 11.9847 0.0052167 16.2627C-0.101748 20.5408 1.43968 24.6963 4.31067 27.8698C7.18167 31.0432 11.1626 32.9918 15.4299 33.3124C19.6973 33.633 23.9247 32.3012 27.2376 29.5924L37.1778 39.5325C37.4919 39.8359 37.9126 40.0037 38.3492 39.9999C38.7858 39.9961 39.2035 39.821 39.5123 39.5122C39.821 39.2035 39.9962 38.7858 40 38.3492C40.0037 37.9125 39.8359 37.4919 39.5325 37.1778ZM16.7063 30.0287C14.0714 30.0287 11.4956 29.2473 9.30477 27.7834C7.11391 26.3196 5.40635 24.2389 4.39801 21.8045C3.38967 19.3702 3.12584 16.6915 3.63989 14.1072C4.15393 11.5229 5.42277 9.14911 7.28594 7.28594C9.14911 5.42277 11.5229 4.15393 14.1072 3.63989C16.6915 3.12584 19.3702 3.38967 21.8046 4.39801C24.2389 5.40635 26.3196 7.11391 27.7835 9.30476C29.2473 11.4956 30.0287 14.0714 30.0287 16.7063C30.0247 20.2384 28.6198 23.6247 26.1223 26.1223C23.6247 28.6198 20.2384 30.0247 16.7063 30.0287Z" fill="#053471"/>
                    </svg> Buscar
                </SearchBarButton>
                {
                    !open ? null : (
                        <SearchBarInner>
                            <div className={styles.searchBarWrap}>{props.children[0]}</div>
                        </SearchBarInner>
                    )
                }
            </SearchBarContainer>
            <SearchBarOverlay open={open} onClick={() => setOpen(!open)} />
        </>
    )
}