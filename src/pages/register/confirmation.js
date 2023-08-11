import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectUserEmail } from '@/redux/selectors';
import { selectAuthError } from '@/redux/selectors';
import PinInput from 'react-pin-input';
import Modal from '@/components/modal/Modal';
import AuthorizationContainer from '@/components/authorizationContainer/AuthorizationContainer';
import CloseButton from '@/components/closeButton/CloseButton';
import RegisterHeader from '@/components/registerHeader/RegisterHeader';
import SecondaryButton from '@/components/secondaryButton/SecondaryButton';
import {
  Text,
  Email,
  ResendLink,
  ErrorText,
  AdditionalText,
} from '@/styles/confirmation.styled';

export default function Confirmation() {
  const initialCode = '1111';
  const authError = useSelector(selectAuthError);
  const email = useSelector(selectUserEmail);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [isCodeRight, setIsCodeRight] = useState(true);
  const [value, setValue] = useState('');

  const onChange = (currentValue) => {
    setValue(currentValue);
  };

  const onCloseModal = () => {
    setShowModal(false);
    router.push('/');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (JSON.stringify(initialCode) === JSON.stringify(value)) {
      setIsCodeRight(true);
      setShowModal(true);
    } else {
      setIsCodeRight(false);
      setValue('');
    }
    console.log(value);
  };

  return (
    <>
      <AuthorizationContainer>
        <CloseButton onClick={() => router.push('/')} />
        <RegisterHeader />
        <Text>
          You’ve got mail to <Email>{email}. </Email>
        </Text>
        {isCodeRight ? (
          <AdditionalText>
            Please enter the four digit code you received
          </AdditionalText>
        ) : (
          <ErrorText>You have entered the wrong code. Try again</ErrorText>
        )}
        <form onSubmit={onSubmit}>
          <PinInput
            length={4}
            placeholder="_"
            focus
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 44,
            }}
            inputStyle={{
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              borderBottom: '1.5px solid var(--brand-color)',
              margin: 0,
              color: 'var(--white-text)',
              width: 56,
              height: 56,
              fontSize: 40,
              lineHeight: 0.6,
              padding: 16,
            }}
            type="numeric"
            onChange={onChange}
          />
          <ResendLink href="">Resend code?</ResendLink>
          <SecondaryButton type="submit" text="Continue" />
        </form>
      </AuthorizationContainer>
      {!authError && showModal && (
        <Modal
          onClose={onCloseModal}
          message="You have successfully created your account"
          showTick={true}
          showButton={true}
        />
      )}
    </>
  );
}
