import React from 'react';
import WhyJoinHeader from "@/components/why-join-header";
import Feature from "@/components/feature";
import Cta from './cta';

const WhyDealsRadar = () => {

    return (
        <div id='why-join' className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
            {/* Header Section */}
            <WhyJoinHeader />
            {/* Interactive Features Section */}
            <Feature />
            <Cta />
        </div>
    );
};

export default WhyDealsRadar;