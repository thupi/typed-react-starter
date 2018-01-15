//
class MeStore {
  hasToken = true;
  login = (values: { email: string; password: string }) => {
    console.log(values);
  }
}

export default MeStore;
