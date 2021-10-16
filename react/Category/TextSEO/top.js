import React, { useState, useLayoutEffect } from "react";
import { ExtensionPoint } from "vtex.render-runtime";
import { useDevice } from "vtex.device-detector";
import {
    useSearchPage
} from "vtex.search-page-context/SearchPageContext";
import style from "./styles.css";
import texts from "./defaults";
import ReactMarkdown from "react-markdown";

const dash = "-";
const comma = ",";
const priorities = ["category-2", "category-1"];

function CategoryBanner() {
    const RenderRuntime = ExtensionPoint();
    const currentDevice = useDevice();
    const {
        selectedFacets,
        map
    } = useSearchPage();

    const {
        props: {
            runtime: {
                route: { params }
            }
        }
    } = RenderRuntime;


    if (selectedFacets.length) {
        let selectedFacet = [];
        if (params.category && params.department === "chocolates") {
            selectedFacet = selectedFacets.filter(facet => {
                if (facet.value == params.category) return facet;
            });
        } else if (params.department) {
            selectedFacet = selectedFacets.filter(facet => {
                if (facet.value == params.department) return facet;
            });
        } else if (params.term) {
            selectedFacet = selectedFacets.filter(facet => {
                if (facet.value == params.term) return facet;
            });
        }

        return (
            <>
                {selectedFacet.length ?
                    <div className={style.mainBgCategory}>
                        <div className={style.mainCategoryText}>
                            {
                                window.innerWidth > 1024 ? <h1>{selectedFacet[0].name}</h1> : null
                            }
                            {Object.keys(texts.top).map(key => {
                                if (selectedFacet[0].value == key) return <p><ReactMarkdown>{texts.top[key]}</ReactMarkdown></p>
                            })}
                        </div>
                    </div>
                    : null}
            </>
        );
    } else if (!selectedFacets.length) {
        return (
            <div className={style.mainBgCategory}>
                <div className={style.mainCategoryText}>
                        {
                            window.innerWidth > 1024 ? <h1>{params.term}</h1> : null
                        }
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default CategoryBanner;