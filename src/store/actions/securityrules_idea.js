rules_version = '2';
// if request.auth.token.email.matches(".*google[.]com");
//sgsbackp1=4UQJP5MXhVRn3K4DJPFQ5H88Qhp2
//function hasRoleOf(role) {
//    	return get(/databases/$(database)/documents/user/$(request.auth.uid)).data.roles[role];
//    }
service cloud.firestore {
  match /databases/{database}/documents {
  function valid() {
    	 return exists(/databases/$(database)/documents/validemails/$(request.auth.token.email)); }
  function hasRoleOf(role) {
    	return get(/user/$(request.auth.uid)).data.roles[role];
    }
  
  function valid_create() {
        return !(request.resource.data.keys().hasAll(["charge"]));
    }

    function valid_update() {
        return request.resource.data.charge == resource.data.charge
               || (valid_create()
                  && !(resource.data.keys().hasAll(["charge"])))
    }

    match /temp/{name} {
        allow read:if request.auth.token.email=='sgsbackup1@gmail.com';
       // allow create: if valid_create(); // field name is not'charge'
        allow create: if valid(); 
        allow update: if request.auth.uid == userId && valid_update(); 
    }

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
  
  
  
   match/users/{firstname}{
  allow read, write: if request.auth.uid != null;
    }
     match /hosp/{createdAt} {
      allow read;
			allow write: if request.auth.uid == "4UQJP5MXhVRn3K4DJPFQ5H88Qhp2";
    }
     match /notice/{createdAt} {
      allow read:if valid();
				allow write: if request.auth.uid == "4UQJP5MXhVRn3K4DJPFQ5H88Qhp2";
   
    }
     match /media/{createdAt} {
      allow read:if request.auth.token.email=='sgsbackup1@gmail.com';
			 
      allow write: if request.auth.uid == "4UQJP5MXhVRn3K4DJPFQ5H88Qhp2";
    }
    
    
    match /VisitingDr/{createdAt} {
      allow read;
			allow write: if request.auth.uid == "4UQJP5MXhVRn3K4DJPFQ5H88Qhp2";
    }
  }
}