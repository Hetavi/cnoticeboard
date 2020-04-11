rules_version = '2';
service cloud.firestore {
    match / databases / { database } / documents {
        function admin() { return exists(/databases/$(database) / documents / admin / $(request.auth.uid)); 
        }
        function emails() {
            return exists(/databases/$(database) / documents / emails_owner / $(request.auth.token.email));
        }
        function emails_2() {
            return exists(/databases/$(database) / documents / emails_editor / $(request.auth.token.email));
        }
        function emails_3() {
            return exists(/databases/$(database) / documents / emails_validuser / $(request.auth.uid));
        }
        //emails _validity
        match / emails_owner / { project }{
            allow read;
            allow write: if request.auth.token.email == 'sgsbackup1@gmail.com'
  }
        match / emails_editor / { project }{
            allow read;
            allow write: if emails();
        }
        match / emails_validuser / { id }{
            allow read;
            allow write: if emails_2() || emails();
        }
        //
        match / users / { userId } {
            allow read;
            allow create: if request.auth.uid != null
                && request.resource.data.role == 'unknown';
            allow update: if (((emails_2() || emails())
                && !(request.resource.data.keys().hasAll(["firstname", "lastName", "Dept", "Mobile"]))))
   || ((request.auth.uid == userId));
        }
        match / hosp / { createdAt } {
            allow read;
            allow write: if emails_2();
        }
        match / notice / { createdAt } {
            allow read;
            allow create: if emails_3();
            allow update;
        }
        match / media / { createdAt } {
            allow read;
            allow write: if emails_2();
        }
        match / VisitingDr / { createdAt } {
            allow read;
            allow write: if emails_2();
        }
    }
}