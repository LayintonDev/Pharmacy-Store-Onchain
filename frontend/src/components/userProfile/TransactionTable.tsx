
type Transaction = {
    id: string;
    date: string;
    Doctor: string;
    note: string;
    prescriptionId: string;
    status: 'Completed' | 'Ongoing' | 'canceled';
  };
  
  const transactions: Transaction[] = [
    {
      id: '456789356',
      date: 'Oct 10, 2024, 04:30pm',
      Doctor: '0x000000000000000',
      prescriptionId: '69087',
      note: '123',
      status: 'Ongoing',
    },
    {
      id: '456789356',
      date: 'Oct 14, 2024, 02:00pm',
      Doctor: '0x000000000000000',
      prescriptionId: '-',
      note: '-',
      status: 'canceled',
    },
    {
      id: '456789356',
      date: 'Oct 16, 2024, 08:00pm',
      Doctor: '0x000000000000000',
      prescriptionId: '78923',
      note: '564',
      status: 'Completed',
    },
    {
      id: '456789356',
      date: 'Oct 19, 2024, 05:30pm',
      Doctor: '0x000000000000000',
      prescriptionId: '90873',
      note: '1749',
      status: 'Completed',
    },
  ];
  
  const getStatusClass = (status: 'Completed' | 'Ongoing' | 'canceled') => {
    switch (status) {
      case 'Completed':
        return 'text-green-500 bg-green-100';
      case 'Ongoing':
        return 'text-yellow-500 bg-yellow-100';
      case 'canceled':
        return 'text-red-500 bg-red-100';
      default:
        return '';
    }
  };
  
const Appointments: React.FC = () => { 

  return (
    <div className="w-full p-6">

      {/* Content area */}
      
      <div className="w-full max-w-7xl overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Ref ID</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Date</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Doctor</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Prescription id</th>
              <th className="py-2 px-1 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">note</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-gray-600 font-bold uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.id}</td>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.date}</td>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.Doctor}</td>
                <td className="py-3 px-4 border-b border-gray-200">{transaction.prescriptionId  }</td>
                <td className="py-2 px-6 w-10 h-10 border-b rounded-sm border-gray-200">{transaction.note  }</td>
                <td className="py-3 px-4 border-b border-gray-200">
                  <span className={`inline-block px-3 py-1 rounded-full ${getStatusClass(transaction.status)}`}>
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        
    </div>
  );
};

export default Appointments;