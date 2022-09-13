/**
 * @export
 * @component
 * @name validatedForm
 *
 * @description
 * validatedForm
 */
const validatedForm = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  if (!username.trim().length || !password.trim().length) {
    if (!username.trim().length) {
      console.log('Username is required!');
    }

    if (!password.trim().length) {
      console.log('Password is required!');
    }

    return false;
  }
  return true;
};

export default validatedForm;
