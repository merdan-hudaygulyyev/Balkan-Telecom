import DeleteIcon from '../../../components/icons/deleteIcon/deleteicon'
import SettingIcon from '../../../components/icons/seticon/seticon'

const UserTable = ({ rows, deleteRow, editRow }) => {
  return (
        <div className="shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Ulanyjynyn ady
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Anten
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Kategoriya
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Bahasy
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Uytgetmek
                        </th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            rows.map((row, index) => (
                                 <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.name}</th>
                                    <td className="px-6 py-4">{row.antennas}</td>
                                    <td className="px-6 py-4">{row.category}</td>
                                    <td className="px-6 py-4">{row.price}</td>
                                    <td className="px-6 py-4 space-x-4">
                                    <button onClick={() => editRow(index)}>
                                        <SettingIcon />
                                    </button>
                                    <button onClick={() => deleteRow(index)}>
                                        <DeleteIcon />
                                    </button>
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </div>
  )
}

export default UserTable
