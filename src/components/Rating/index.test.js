import Rating from './'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Fragment } from 'react'

// import starActive from '../../assets/images/star-active.svg'
// import starInactive from '../../assets/images/star-inactive.svg'

describe('Carroussel', () => {
    test('Should render Rating==1', async () => {
        render(
            <Fragment>
                <Rating 
                    rating="1"
                /> 
            </Fragment>
        )
        const jobElement = screen.getAllByTestId(`job-rating`)
        
        expect(jobElement[0].src).toMatch(new RegExp('star-active'))
        expect(jobElement[1].src).toMatch(new RegExp('star-inactive'))
        expect(jobElement[2].src).toMatch(new RegExp('star-inactive'))
        expect(jobElement[3].src).toMatch(new RegExp('star-inactive'))
        expect(jobElement[4].src).toMatch(new RegExp('star-inactive'))
    })
    test('Should render Rating==2', async () => {
        render(
            <Fragment>
                <Rating 
                    rating="2"
                /> 
            </Fragment>
        )
        const jobElement = screen.getAllByTestId(`job-rating`)
        
        expect(jobElement[0].src).toMatch(new RegExp('star-active'))
        expect(jobElement[1].src).toMatch(new RegExp('star-active'))
        expect(jobElement[2].src).toMatch(new RegExp('star-inactive'))
        expect(jobElement[3].src).toMatch(new RegExp('star-inactive'))
        expect(jobElement[4].src).toMatch(new RegExp('star-inactive'))
    })
    test('Should render Rating==3', async () => {
        render(
            <Fragment>
                <Rating 
                    rating="3"
                /> 
            </Fragment>
        )
        const jobElement = screen.getAllByTestId(`job-rating`)
        
        expect(jobElement[0].src).toMatch(new RegExp('star-active'))
        expect(jobElement[1].src).toMatch(new RegExp('star-active'))
        expect(jobElement[2].src).toMatch(new RegExp('star-active'))
        expect(jobElement[3].src).toMatch(new RegExp('star-inactive'))
        expect(jobElement[4].src).toMatch(new RegExp('star-inactive'))
    })
    test('Should render Rating==4', async () => {
        render(
            <Fragment>
                <Rating 
                    rating="4"
                /> 
            </Fragment>
        )
        const jobElement = screen.getAllByTestId(`job-rating`)
        
        expect(jobElement[0].src).toMatch(new RegExp('star-active'))
        expect(jobElement[1].src).toMatch(new RegExp('star-active'))
        expect(jobElement[2].src).toMatch(new RegExp('star-active'))
        expect(jobElement[3].src).toMatch(new RegExp('star-active'))
        expect(jobElement[4].src).toMatch(new RegExp('star-inactive'))
    })
    test('Should render Rating==5', async () => {
        render(
            <Fragment>
                <Rating 
                    rating="5"
                /> 
            </Fragment>
        )
        const jobElement = screen.getAllByTestId(`job-rating`)
        
        expect(jobElement[0].src).toMatch(new RegExp('star-active'))
        expect(jobElement[1].src).toMatch(new RegExp('star-active'))
        expect(jobElement[2].src).toMatch(new RegExp('star-active'))
        expect(jobElement[3].src).toMatch(new RegExp('star-active'))
        expect(jobElement[4].src).toMatch(new RegExp('star-active'))
    })
})