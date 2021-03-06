import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState, Component } from 'react';

import { useServicePage } from '@/hooks/useServices';

import getComponent from '@/components/Components';


function ServicePage ({}) {

    const router = useRouter();
    const { slug } = router.query

    console.log('slug is', slug)

    const servicePageQuery = useServicePage(slug)
    const servicePage = servicePageQuery.data

    if (servicePageQuery.isLoading) {
        return (
            <>
                Загрузка...
            </>
        )
    }

    if (!servicePage?.page) {
        return (
            <>
                Страница не найдена
                <Link href="/">
                    На главную
                </Link>
            </>
        );
    }

    return (
        <>
        {servicePage?.page.blocks.map((block) =>
            getComponent(block)
        )}
        </>
    );
}

export default ServicePage
