import {
  interactor,
  text
} from '@bigtest/interactor';

export default interactor(class DummyInteractor {
  welcomeMessage = text('[data-test-dummy-welcome-message]');
});
