
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor,screen,fireEvent} from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { peopleData } from './utils/mock-constant';
import axios from 'axios';
import  ListView from './ListView';
jest.mock('axios');
afterEach(()=> {
    jest.resetAllMocks()
})
  describe('App', () => {
    test('Render People List', async () => {
        jest.spyOn(axios, "get").mockImplementation(() => Promise.resolve({data: peopleData}));
        const renderComponent = () => (render(<BrowserRouter ><ListView /></BrowserRouter>));
        const { getByText, getAllByRole } = renderComponent();
        await waitFor(() => {
            const peopleList = screen.getAllByTestId("people-list");    
            expect(peopleList).toHaveLength(10);
            const headingText = screen.getByTestId("list-heading");
            expect(headingText).toHaveTextContent('Character List View');
        });
    });
  })

  