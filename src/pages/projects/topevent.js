import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import MainHeader from '../../components/MainHeader/MainHeader';

const TopEventPage = () => {
    return (
        <div>
            <MainHeader 
                above='project'
                title='Top Event'
                subTitle={`Fresh and dynamic event company needed a modern,
                energetic branding. On the top of that we built together an unusual website reflecting brand strengths.`}
                leftText={true}
            />
            <h1>Topevent</h1>
            <Button to='https://topevent.pl'>Live project</Button>
        </div>
    )
};

export default TopEventPage