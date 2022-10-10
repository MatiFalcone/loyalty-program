import { Input, Table } from 'reactstrap';
import user1 from '../../../assets/images/users/user1.jpg';
import user2 from '../../../assets/images/users/user2.jpg';
import user3 from '../../../assets/images/users/user3.jpg';
import user4 from '../../../assets/images/users/user4.jpg';
import user5 from '../../../assets/images/users/user5.jpg';
import DashCard from '../dashboardCards/DashCard';

const tableData = [
  {
    isActive: 'active',
    avatar: user1,
    name: 'Hanna Gover',
    post: 'Web Designer',
    project: 'Flexy React',
    status: 'Low'
  },
  {
    isActive: '',
    avatar: user2,
    name: 'Daniel Kristeen',
    post: 'Project Manager',
    project: 'Lading pro React',
    status: 'Medium'
  },
  {
    isActive: '',
    avatar: user3,
    name: 'Julian Josephs',
    post: 'Developer',
    project: 'Elite React',
    status: 'High'
  },
  {
    isActive: '',
    avatar: user4,
    name: 'Jan Petrovic',
    post: 'Frontend Eng',
    project: 'Flexy React',
    status: 'Low'
  },
  {
    isActive: '',
    avatar: user5,
    name: 'Steve Gover',
    post: 'Content Writer',
    project: 'Ample React',
    status: 'Medium'
  },
  {
    isActive: '',
    avatar: user1,
    name: 'Johnathan',
    post: 'Graphic',
    project: 'Monster React',
    status: 'Low'
  },
  {
    isActive: '',
    avatar: user5,
    name: 'John Gover',
    post: 'Ethical Hacker',
    project: 'Lading pro React',
    status: 'High'
  },
];

const ProjectMonth = () => {
  return (
    <DashCard
      title="Projects of the Month"
      actions={
        <Input type="select" className="form-select">
          <option value="0">Monthly</option>
          <option value="1">Daily</option>
          <option value="2">Weekly</option>
          <option value="3">Yearly</option>
        </Input>
      }
    >
      <div className="table-responsive mt-4 pt-4">
        <Table className="text-nowrap mt-n3 mb-2 align-middle" borderless>
          <thead>
            <tr>
              <th>Assigned</th>
              <th>Name</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((tdata) => (
              <tr key={tdata.name} className={`border-top ${tdata.isActive}`}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={tdata.avatar}
                      className="rounded-circle"
                      alt="avatar"
                      width="45"
                      height="45"
                    />
                    <div className="ms-3">
                      <h6 className="mb-0 fw-normal">{tdata.name}</h6>
                      <span className="text-muted fs-7">{tdata.post}</span>
                    </div>
                  </div>
                </td>
                <td>{tdata.project}</td>
                <td>
                  {tdata.status === 'Low' ? (
                    <span className="badge bg-danger rounded-pill text-dark-white d-inline-block fw-bold">
                      {tdata.status}
                    </span>
                  ) : tdata.status === 'Medium' ? (
                    <span className="badge bg-primary rounded-pill text-dark-white d-inline-block fw-bold">
                      {tdata.status}
                    </span>
                  ) : (
                    <span className="badge bg-success rounded-pill text-dark-white d-inline-block fw-bold">
                      {tdata.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </DashCard>
  );
};

export default ProjectMonth;
