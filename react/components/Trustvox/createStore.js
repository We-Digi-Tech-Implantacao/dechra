import React, { useLayoutEffect } from "react";
import defaults from "./defaults";

function CreateStore() {
    useLayoutEffect(() => {
        fetch("https://staging.trustvox.com.br/api/stores", {
            method: "POST",
            headers: {
                Accept: "application/vnd.trustvox-v2+json",
                Authorization: defaults.Token
            }
        })
    }, []);
    
    return null;
}

export default CreateStore;