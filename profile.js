function toggleEdit() {
    const profileInfo = document.querySelector('.profile-info');
    const profileForm = document.querySelector('#profile-form');
    const editButton = document.querySelector('#edit-profile');
    
    if (profileInfo.style.display === 'none') {
      profileInfo.style.display = 'block';
      profileForm.style.display = 'none';
      editButton.textContent = 'Edit Profile';
    } else {
      profileInfo.style.display = 'none';
      profileForm.style.display = 'block';
      editButton.textContent = 'Cancel';
    }
  }
  
  // Function to handle form submission
  function saveProfile(event) {
    event.preventDefault();
    
    const username = document.querySelector('#edit-username').value;
    const email = document.querySelector('#edit-email').value;
    const address = document.querySelector('#edit-address').value;
    const profilePicture = document.querySelector('#edit-profile-picture').files[0];
    
    // Update profile information
    document.querySelector('#username').textContent = username;
    document.querySelector('#email').textContent = email;
    document.querySelector('#address').textContent = address;
    
    // Update profile picture
    if (profilePicture) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.querySelector('#profile-picture-preview').src = e.target.result;
      };
      reader.readAsDataURL(profilePicture);
    }
    
    // Toggle back to viewing mode
    toggleEdit();
  }
  
  // Event listeners
  document.querySelector('#edit-profile').addEventListener('click', toggleEdit);
  document.querySelector('#profile-form').addEventListener('submit', saveProfile);
  
  // Preview the selected profile picture before saving
  document.querySelector('#edit-profile-picture').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.querySelector('#profile-picture-preview').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  