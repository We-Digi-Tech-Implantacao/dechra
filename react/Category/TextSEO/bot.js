import React from "react";
import { ExtensionPoint } from "vtex.render-runtime";
import { useSearchPage } from "vtex.search-page-context/SearchPageContext";
import style from "./styles.css";
import texts from "./defaults";
import ReactMarkdown from "react-markdown";

function CategoryBanner() {
    const RenderRuntime = ExtensionPoint();
    const { selectedFacets } = useSearchPage();
    
    console.log("🚀 ~ file: bot.js ~ line 10 ~ CategoryBanner ~ RenderRuntime", RenderRuntime)
    
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
                    <div className={style.mainBgCategoryBot}>
                        {Object.keys(texts.bot).map(key => {
                            if (selectedFacet[0].value == key && texts.bot[key] !== '') return (
                                <>
                                    <div className={style.mainCategoryTextBot}>
                                        <h2>{selectedFacet[0].name}</h2>
                                        <ReactMarkdown>{texts.bot[key]}</ReactMarkdown>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    : null}
            </>
        );
    } else {
        return null;
    }
}

export default CategoryBanner;