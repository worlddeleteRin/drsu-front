import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState, Component } from 'react';

import apiClient from '@/api/api_client';

import getComponent from '@/components/Components';

function ServicePage ({}) {

    const router = useRouter();
    const { slug } = router.query

    // state
    const [pageData, setPageData] = useState(null);

    const getServicePage = (slug) => {
        apiClient.get(
            "site/services/" + slug
        ).then((response) => {
            setPageData(response?.data)
        })
    }
    useEffect(() => {
        if (!router.isReady) return
        console.log('run use effect')
        console.log('api client is', apiClient)
        console.log('slug is', slug)
        getServicePage(slug)
        console.log('page data is', pageData)
    }, [router.isReady]);


    if (!pageData?.page) {
        return (
            <>
                not page data
            </>
        );
    }
    return (
        <>
        {pageData?.page.blocks.map((block) =>
            getComponent(block)
        )}
        </>
    );
}

export default ServicePage
