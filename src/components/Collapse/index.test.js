import Collapse from './'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Fragment } from 'react'

describe('Collapse', () => {
    test('Should render Title', async () => {
        render(
            <Fragment>
                <Collapse 
                    title="Titre Du Collapse"
                    description="Description du Collapse"
                /> 
            </Fragment>
        )
        const jobDescriptionElement = screen.queryAllByText('Titre Du Collapse')
        expect(jobDescriptionElement).toHaveLength(1)
    })
      test('Should render Description in the document', async () => {
        render(
            <Fragment>
                <Collapse 
                    title="Titre Du Collapse"
                    description="Description du Collapse"
                /> 
            </Fragment>
        )
        const jobDescriptionElement = screen.queryAllByText('Description du Collapse')
        expect(jobDescriptionElement).toHaveLength(1)
    })
    test('Should render Description visible', async () => {
        render(
            <Fragment>
                <Collapse 
                    title="Titre Du Collapse"
                    description="Description du Collapse"
                /> 
            </Fragment>
        )
        const jobClick = screen.getByTestId('job-Click')
        fireEvent.click(jobClick)
        const jobDescriptionElement = screen.getByTestId(`job-desc`)
        expect(jobDescriptionElement).toHaveClass('collapse-animation-block')
    })
    test('Should render Description hidden', async () => {
        render(
            <Fragment>
                <Collapse 
                    title="Titre Du Collapse"
                    description="Description du Collapse"
                /> 
            </Fragment>
        )
        const jobClick = screen.getByTestId('job-Click')
        fireEvent.click(jobClick)
        fireEvent.click(jobClick)
        const jobDescriptionElement = screen.getByTestId(`job-desc`)
        expect(jobDescriptionElement).toHaveClass('collapse-animation-none')
    })
})
