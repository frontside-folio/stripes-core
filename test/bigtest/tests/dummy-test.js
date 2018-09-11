import { beforeEach, it } from '@bigtest/mocha';
import { expect } from 'chai';

import { describeApplication } from '../helpers/describe-application';
import DummyInteractor from '../interactors/dummy';

describeApplication('Dummy', () => {
  const dummy = new DummyInteractor();

  beforeEach(function () {
    return this.visit('/dummy', () => {
      expect(dummy.$root).to.exist;
    });
  });

  it('has a welcome message', () => {
    expect(dummy.welcomeMessage).to.equal('Hello World');
  });
});
