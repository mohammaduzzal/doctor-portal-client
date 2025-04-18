
const teamMembers = [
    {
      name: 'Dr. Emily Carter',
      title: 'Lead Dentist',
      image: 'https://i.ibb.co.com/pjtqKk6W/images.jpg',
    },
    {
      name: 'Dr. Liam Johnson',
      title: 'Oral Surgeon',
      image: 'https://i.ibb.co.com/1YZnK2nV/images-1.jpg',
    },
    {
      name: 'Dr. Sophia Lee',
      title: 'Pediatric Dentist',
      image: 'https://i.ibb.co.com/6RSQwpkY/images-2.jpg',
    },
    {
      name: 'Dr. Ethan Miller',
      title: 'Orthodontist',
      image: 'https://i.ibb.co.com/mrw5msNr/images-3.jpg',
    },
  ];
  
  const Team = () => {
    return (
      <div className="min-h-screen bg-teal-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-teal-500 font-semibold text-lg">Our Team</p>
            <h2 className="text-4xl font-bold text-gray-800">Meet Our Experts</h2>
            <p className="text-gray-600 mt-2">Compassionate, skilled, and experienced professionals ready to take care of your smile.</p>
          </div>
  
          {/* Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-xl overflow-hidden text-center p-6 hover:shadow-xl transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-teal-400"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Team;
  