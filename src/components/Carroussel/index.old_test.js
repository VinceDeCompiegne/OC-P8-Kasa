import Carroussel from '.'
import { render, screen } from '@testing-library/react'
import { Fragment } from 'react'
//, fireEvent
import imageTest from "../../assets/images/home.png"
describe('Carroussel', () => {
//   test('Should render title and image', async () => {
//     render(

//         <Carroussel
//           title="Harry Potter"
//           label="Magicien frontend"
//           picture="/myPicture.png"
//         />

//     )
//     const cardPicture = screen.getByRole('img')
//     const cardTitle = screen.getByText(/Harry/i)
//     expect(cardPicture.src).toBe('http://localhost/myPicture.png')
//     expect(cardTitle.textContent).toBe(' Harry Potter ')
//   })
  test('Should render image', async () => {
    render(
        <Fragment>
            <Carroussel
                image={imageTest}
            />  
        </Fragment>
    )
    const jobTitleElements = screen.getAllByTestId('job-image')
    expect(jobTitleElements.src).toBe('../../assets/images/home.png')
    // const parentNode = jobTitleElements.closest('div')
    // fireEvent.click(parentNode)
    // expect(cardTitle.textContent).toBe('⭐️ Harry Potter ⭐️')
  })
})