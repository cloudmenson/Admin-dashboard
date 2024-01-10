import React from 'react';
import {
  Box,
  Chip,
  Table,
  Stack,
  Avatar,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
} from '@mui/material';

import DashboardCard from '../../../components/shared/DashboardCard';

interface IProduct {
  id: string;
  imgsrc: string;
  name: string;
  post: string;
  pname: string;
  priority: string;
  pbg: string;
  budget: string;
}

const products: IProduct[] = [
  {
    id: '1',
    imgsrc:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-1.jpg',
    name: 'Sunil Joshi',
    post: 'Web Designer',
    pname: 'Elite Admin',

    priority: 'Low',
    pbg: 'primary.main',
    budget: '3.9',
  },
  {
    id: '2',
    imgsrc:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-2.jpg',
    name: 'Andrew McDownland',
    post: 'Project Manager',
    pname: 'Real Homes WP Theme',
    priority: 'Medium',
    pbg: 'secondary.main',
    budget: '24.5',
  },
  {
    id: '3',
    imgsrc:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-3.jpg',
    name: 'Christopher Jamil',
    post: 'Project Manager',
    pname: 'MedicalPro WP Theme',
    priority: 'High',
    pbg: 'error.main',
    budget: '12.8',
  },
  {
    id: '4',
    imgsrc:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-4.jpg',
    name: 'Nirav Joshi',
    post: 'Frontend Engineer',
    pname: 'Hosting Press HTML',
    priority: 'Critical',
    pbg: 'success.main',
    budget: '2.4',
  },
];

const ProductPerformance: React.FC = () => {
  return (
    <DashboardCard title="Product Performance">
      <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
        <Table
          aria-label="simple table"
          sx={{
            mt: 2,
            whiteSpace: 'nowrap',
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Assigned
                </Typography>
              </TableCell>

              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Project
                </Typography>
              </TableCell>

              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Priority
                </Typography>
              </TableCell>

              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  Budget
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      src={product.imgsrc}
                      alt={product.imgsrc}
                      sx={{ width: 40, height: 40 }}
                    />

                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {product.name}
                      </Typography>

                      <Typography
                        color="textSecondary"
                        sx={{
                          fontSize: '13px',
                        }}
                      >
                        {product.post}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>

                <TableCell>
                  <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                    {product.pname}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Chip
                    sx={{
                      px: '4px',
                      color: '#fff',
                      backgroundColor: product.pbg,
                    }}
                    size="small"
                    label={product.priority}
                  />
                </TableCell>

                <TableCell align="right">
                  <Typography variant="h6">${product.budget}k</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default ProductPerformance;
