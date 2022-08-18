
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor,screen} from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { PeopleDetailData} from './utils/mock-constant';
import axios from 'axios';
import  Details from './Details';
jest.mock('axios');
afterEach(()=> {
    jest.resetAllMocks()
})
  describe('App', () => {
    test('Render People Details', async () => {
        jest.spyOn(axios, "get").mockImplementation(() => Promise.resolve({data: PeopleDetailData}));
        const renderComponent = () => (render(<BrowserRouter ><Details/></BrowserRouter>));
        const { getByText, getAllByRole } = renderComponent();
        await waitFor(() => {
          const peopleList = screen.getByTestId("people-lists");    
            expect(peopleList).toHaveClass('card__title')
            const headingText = screen.getByTestId("details-heading");
            expect(headingText).toHaveTextContent('Character Details view');
        });
    });
  })

  