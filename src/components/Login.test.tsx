import { MockedResponse } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import { UserDocument } from '../generated/graphql';
import {
  invalidEmailUser,
  nonExistentEmailUser,
  testUser,
} from '../test/data-test';
import { render } from '../test/test-provider';
import { renderUserContext } from '../test/test-user-context-provider';
import Header from './header';
import Login from './login';

const mockUser: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: UserDocument,
      variables: { where: { email: { _eq: `${testUser.email}` } } },
    },
    result: {
      data: {
        users: [testUser],
      },
    },
  },
];

const mockWrongEmailUser: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: UserDocument,
      variables: { where: { email: { _eq: `${nonExistentEmailUser}` } } },
    },
    result: {
      data: {
        users: [],
      },
    },
  },
];

describe('Test in Login Component', () => {
  it('Should show the email required message', async () => {
    render(<Login />, mockUser);
    fireEvent.click(screen.getByText('login'));
    expect(
      await screen.findByText('email is a required field')
    ).toBeInTheDocument();
  });

  it('Should show the invalid email message', async () => {
    render(<Login />, mockUser);

    fireEvent.change(screen.getByTestId('input-login'), {
      target: { value: `${invalidEmailUser}` },
    });
    fireEvent.click(screen.getByText('login'));
    expect(await screen.findByText('Invalid Email')).toBeInTheDocument();
  });

  it("Should show email doesn't exist message", async () => {
    render(<Login />, mockWrongEmailUser);

    fireEvent.change(screen.getByTestId('input-login'), {
      target: { value: `${nonExistentEmailUser}` },
    });
    fireEvent.click(screen.getByText('login'));
    expect(
      await screen.findByText("This email doesn't exist")
    ).toBeInTheDocument();
  });

  it('Should show welcome message', async () => {
    render(<Login />, mockUser);
    renderUserContext(<Header />, []);

    fireEvent.change(screen.getByTestId('input-login'), {
      target: { value: `${testUser.email}` },
    });

    fireEvent.click(screen.getByText('login'));

    await waitFor(() => {
      expect(screen.getByText('loading...')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByTestId('greeting-user')).toBeInTheDocument();
    });
  });
});
