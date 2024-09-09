
import { render, screen } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { Checkout } from './Checkout';


// Mock components
jest.mock('../../reusable/ShoppingProcessContainer/ShoppingProcessContainer', () => ({
  ShoppingProcessContainer: ({ children }) => <div>{children}</div>
}));

jest.mock('../../common/OrderSummary/OrderSummary', () => ({
  OrderSummary: () => <div>OrderSummary</div>
}));

jest.mock('../../common/BagList/BagList', () => ({
  BagList: () => <div>BagList</div>
}));

jest.mock('../../reusable/ChildWrapper/ChildWrapper', () => ({
  ChildWrapper: ({ children }) => <div>{children}</div>
}));

jest.mock('./ShippingContent/ShippingContent', () => ({
  ShippingContent: () => <div>ShippingContent</div>
}));

jest.mock('./CardDetailsContent/CardDetailsContent', () => ({
  CardDetailsContent: () => <div>CardDetailsContent</div>
}));

describe('Checkout Component', () => {
  test('renders ShippingContent when path is /checkout', () => {
    render(
      <MemoryRouter initialEntries={['/checkout']}>
        <Checkout />
      </MemoryRouter>
    );

    // Check if ShippingContent is rendered
    expect(screen.getByText('ShippingContent')).toBeInTheDocument();

    // Check if OrderSummary and BagList are rendered
    expect(screen.getByText('OrderSummary')).toBeInTheDocument();
    expect(screen.getByText('BagList')).toBeInTheDocument();
  });

  test('renders CardDetailsContent when path is not /checkout', () => {
    render(
      <MemoryRouter initialEntries={['/some-other-path']}>
        <Checkout />
      </MemoryRouter>
    );

    // Check if CardDetailsContent is rendered
    expect(screen.getByText('CardDetailsContent')).toBeInTheDocument();

    // Check if OrderSummary and BagList are rendered
    expect(screen.getByText('OrderSummary')).toBeInTheDocument();
    expect(screen.getByText('BagList')).toBeInTheDocument();
  });
});
