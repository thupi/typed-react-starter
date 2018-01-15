import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { FormState, FieldState } from 'formstate';

// Types
import { IStore } from 'stores/Store';

// FormState
class LoginFormState {
  email = new FieldState('');
  password = new FieldState('');

  state = new FormState({
    email: this.email,
    password: this.password
  });

  getValues() {
    return {
      email: this.email.$,
      password: this.password.$
    };
  }
}

//
interface IProps {
  store?: IStore;
}
export class LoginForm extends React.Component<IProps> {
  form = new LoginFormState();

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const vaildation = await this.form.state.validate();
    if (vaildation.hasError) {
      console.log(vaildation.hasError);
    }
    this.props.store!.meStore.login(this.form.getValues());
  };

  render() {
    return (
      <div>
        <form style={{ textAlign: 'center' }} onSubmit={this.handleSubmit}>
          <label>Email</label>
          <br />
          <input
            value={this.form.email.value}
            onChange={e => this.form.email.onChange(e.currentTarget.value)}
          />
          <br />

          <label>Password</label>
          <br />
          <input />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default inject('store')(observer(LoginForm));
