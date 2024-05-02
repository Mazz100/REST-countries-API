import * as Select from '@radix-ui/react-select'
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';


function FilterRegion({setRegionParam, regionParam, filterRegion}) {
    const regionList = [
        { id: 1, value: 'Africa' },
        { id: 2, value: 'America' },
        { id: 3, value: 'Asia' },
        { id: 4, value: 'Europe' },
        { id: 5, value: 'Oceania' },
    ]

    useEffect(() => {
        console.log(filterRegion);

        if(isNaN(filterRegion)){
            console.log('Null');
        }
    })

    return (
        <form className='inline-flex items-center'>
            <Select.Root name='region filter list' defaultValue={filterRegion} onValueChange={(value) => setRegionParam(r => {

                r.set('region', value);
                return r
            }, { replace: true })}>

                {filterRegion && <button
                    type='button'
                    aria-label='Remove filter'
                    onClick={() => {

                        regionParam.delete('region');
                        setRegionParam(regionParam);
                       
                    }}
                    className='bg-white shadow-md p-2 mx-3 md:mx-0 rounded-full hover:bg-gray-200 transform hover:scale-105 transition-all'>

                    <svg className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </button>}

                <Select.Trigger className='bg-white inline-flex items-center shadow-md p-4 mx-6 rounded-md'
                    aria-label='Filter by Region' >
                    <Select.Value className='font-semibold'
                        placeholder="Filter by Region" />

                    <svg className="w-4 ml-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Content
                        position='popper'
                        sideOffset={5}
                        className='bg-white shadow-md rounded-lg p-2 overflow-hidden transform max-h-[--radix-select-content-available-height ] w-[--radix-select-trigger-width]'>
                        <Select.Viewport className='hover:cursor-default text-lg'>

                            {regionList.map(regions =>
                                <Select.Item key={regions.id}
                                    className='flex items-center p-1 justify-between rounded-lg data-[highlighted]:bg-gray-100 data-[highlighted]:outline-none transition-colors'
                                    value={regions.value}>

                                    <Select.ItemText >
                                        {regions.value}
                                    </Select.ItemText>

                                    <Select.ItemIndicator>
                                        <svg className='' width="15" height="15"
                                            viewBox="0 0 15 15"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </Select.ItemIndicator>
                                </Select.Item>)}

                        </Select.Viewport>
                        <Select.Arrow />
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </form >
    );
}

export default FilterRegion