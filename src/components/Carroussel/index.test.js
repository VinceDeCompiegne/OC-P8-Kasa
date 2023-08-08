import Carroussel from './'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Fragment } from 'react'

const data = {pictures:["https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg","https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg","https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg","https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg","https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"]}

describe('Carroussel', () => {
    test('Should render dot', async () => {
        render(
            <Fragment>
                <Carroussel 
                    image={data.pictures}
                /> 
            </Fragment>
        )
        const jobClick = screen.getByTestId('job-carroussel-arrow_left')
        fireEvent.click(jobClick)
        const jobDescriptionElement = screen.getAllByTestId(`job-carroussel-dot`)
        expect(jobDescriptionElement[data.pictures.length-1]).toHaveClass('dot_true')
    })

    const dataOne = {pictures:["https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"]}

    test('Should render Empty', async () => {
        render(
            <Fragment>
                <Carroussel 
                    image={dataOne.pictures}
                /> 
            </Fragment>
        )
        const jobArrowLeft = screen.queryAllByText(`job-carroussel-arrow_left`)
        expect(jobArrowLeft).not.toHaveLength(1)

        const jobElementArrowRight = screen.queryAllByText(`job-carroussel-arrow_right`)
        expect(jobElementArrowRight).not.toHaveLength(1)
    })

    const dataVide = {pictures:[]}

    test('Should render One Pictures', async () => {
        render(
            <Fragment>
                <Carroussel 
                    image={dataVide.pictures}
                /> 
            </Fragment>
        )
        const jobDescriptionElement = screen.queryAllByText('Carroussel vide')
        expect(jobDescriptionElement).toHaveLength(1)
    })
})