import { toast } from 'react-hot-toast';
/**
 *
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
      toast.error('Username is required!');
    }

    if (!password.trim().length) {
      toast.error('Password is required!');
    }

    return false;
  }
  return true;
};

export default validatedForm;
