import Card from './'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Fragment } from 'react'
import { MemoryRouter } from 'react-router-dom'
describe('Card', () => {
    test('Should render Information', async () => {
        render(
            <Fragment>
                <MemoryRouter>
                <Card 
                    id="c67ab8a7"
                    title="Appartement cosy"
                    cover="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
                />
                </MemoryRouter>
            </Fragment>
        )
        const jobArticle = screen.getByTestId(`job-link-card`)
        expect(jobArticle.href).toBe("http://localhost/fiche/c67ab8a7")
        const jobImg = screen.getByTestId(`job-img-card`)
        expect(jobImg.src).toBe("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg")
        const jobH3 = screen.getByTestId(`job-h3-card`)
        expect(jobH3.textContent).toBe("Appartement cosy")
    })
})