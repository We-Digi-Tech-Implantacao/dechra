import React, { useEffect, useState, useCallback } from "react"
import colors from "./colors"
import { useSearchPage } from 'vtex.search-page-context/SearchPageContext'
import { FilterNavigatorFlexible } from "vtex.search-result"
import style from "./filter.css"

function SearchPageColorSelector() {
    const { filters } = useSearchPage()
    const [open, setOpen] = useState(false)

    const handleClick = useCallback(() => {
        setOpen(!open)
    })

    console.log(filters)

    return (
        <div className={style.filtersWrapper}>
            <span className={style.button} onClick={handleClick}>Filtrar por</span>
            <div className={`${style.filtersContainer} ${open ? style.open : ' '}`}>
                <div className={style.filters}>
                    {
                        filters.length > 0 ?
                            filters.map(filter => {
                                if (filter.type == "PriceRanges" || filter.title == "Indicações (teste campo )" || filter.title == "Marca") return null
                                if (filter.title == "Cor") {
                                    return (
                                        <div className={style.filterContainer}>
                                            <h3>{filter.title}</h3>
                                            <div className={style.filterContentColor}>
                                                {
                                                    filter.facets.map(facet => {
                                                        return (
                                                            Object.keys(colors).map(i => {
                                                                if (i == facet.name.toLowerCase()) {
                                                                    if (facet.selected) return <a style={{ backgroundColor: colors[i].value }} title={facet.name} className={style.filterItemColorSelected} href={`/${facet.href}`}></a>
                                                                    if (colors[i].image) return <a style={{ backgroundImage: `url(${colors[i].value}` }} title={facet.name} className={style.filterItemColor} href={`/${facet.href}`}></a>
                                                                    return (
                                                                        <a style={{ backgroundColor: colors[i].value }} title={facet.name} className={style.filterItemColor} href={`/${facet.href}`}></a>
                                                                    )
                                                                } else {
                                                                    return null
                                                                }
                                                            })
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                } else if (filter.title == "Tamanho") {
                                    return (
                                        <div className={style.filterContainer}>
                                            <h3>{filter.title}</h3>
                                            <div className={style.filterContentTamanho}>
                                                {
                                                    filter.facets.map(facet => {
                                                        if (facet.selected) return <a className={style.filterItemTamanhoSelected} href={`/${facet.href}`}>{facet.name}</a>
                                                        return (
                                                            <a className={style.filterItemTamanho} href={`/${facet.href}`}>{facet.name}</a>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className={style.filterContainer}>
                                            <h3>{filter.title}</h3>
                                            <div className={style.filterContent}>
                                                {
                                                    filter.facets.map(facet => {
                                                        if (facet.selected) return (
                                                            <div className={style.filterItemContainer}>
                                                                <span className={style.checked}></span>
                                                                <a className={style.filterItem} href={`/${facet.href}`}>{facet.name}</a>
                                                            </div>
                                                        )
                                                        return (
                                                            <div className={style.filterItemContainer}>
                                                                <span className={style.filterCheckBox}></span>
                                                                <a className={style.filterItem} href={`/${facet.href}`}>{facet.name}</a>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        : null
                    }
                </div>
                <div className={style.priceRange}>
                    <FilterNavigatorFlexible />
                </div>
            </div>
        </div>
    )
}

export default SearchPageColorSelector