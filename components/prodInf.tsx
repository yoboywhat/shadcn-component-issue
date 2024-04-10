"use client";

import React from 'react'
import { IProduct } from '@/app/types/types'
import { useState } from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const ProdInf: React.FC<{ productData: IProduct}> = ({ productData }) => {
    const [infOpen, setInfOpen] = useState(false);

    const toggleSheet = () => {
        setInfOpen(prevState => !prevState);
    };

    return (
        <Sheet>
            {/* Pass toggleSheet function to SheetTrigger */}
            <SheetTrigger onClick={toggleSheet} />
            <SheetContent side="bottom">
                <SheetHeader>
                    <SheetTitle>I´m trying this out</SheetTitle>
                    <SheetDescription>
                        Lorem Impsum bla bla
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}

export default ProdInf
