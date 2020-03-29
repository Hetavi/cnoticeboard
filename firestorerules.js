rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
  //emails _validity
  match/emails_owner/{project}{
  allow read;
  allow write :if request.auth.token.email=='sgsbackup1@gmail.com'
  }
  
  	 function emails() {
    	 return exists(/databases/$(database)/documents/emails_owner/$(request.auth.token.email)); }
 
  
  match/emails_editor/{project}{
  allow read;
  allow write :if emails();
  }
  
  function emails_2() {
    		 return exists(/databases/$(database)/documents/emails_editor/$(request.auth.token.email)); }
 
  match/emails_validuser/{id}{
  allow read;
  allow write :if emails_2();
  }
  
  // emails validity over
  function emails_3() {
    		 return exists(/databases/$(database)/documents/emails_validuser/$(request.auth.token.email)); }
   
   //
   match/users/{firstname}{
  allow read, write: if request.auth.uid != null;
    }
     match /hosp/{createdAt} {
      allow read;
			allow write: if emails_2();
    }
     match /notice/{createdAt} {
      allow read;
				allow write: if emails_3();   
    }
     match /media/{createdAt} {
      allow read;			 
      allow write: if emails_2();
    }       
    match /VisitingDr/{createdAt} {
      allow read;
			allow write: if emails_2();
    }
  }
}