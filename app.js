
        function calculateAge() {
            const day = document.getElementById('day').value;
            const month = document.getElementById('month').value;
            const year = document.getElementById('year').value;

            if (!day || !month || !year) {
                document.getElementById('result').innerHTML = "Please fill all fields!";
                return;
            }

            const today = new Date();
            const birthDate = new Date(year, month - 1, day); // JavaScript month is 0-based
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            const dayDiff = today.getDate() - birthDate.getDate();

            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                age--;
            }

            document.getElementById('result').innerHTML = `Your age is: ${age} years old`;
        }
