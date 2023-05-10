import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { DatabaseProvider, AuthProvider, useFirebaseApp } from 'reactfire';

export const FirebaseComponents = ({ children }) => {
  const app = useFirebaseApp(); 
  const database = getDatabase(app);
  const auth = getAuth(app);

  return (
    <AuthProvider sdk={auth}>
      <DatabaseProvider sdk={database}>
        {children}
      </DatabaseProvider>
    </AuthProvider>
  );
}