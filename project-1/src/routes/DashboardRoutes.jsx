import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../pages/DashboardLayout';
import CreateItem from '../pages/items/CreateItem';
import EditItem from '../pages/items/EditItem';
import ListItems from '../pages/items/ListItems';
import NotFound from '../pages/other/NotFound';

export default function DashboardRoutes() {
  return (
    
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<ListItems />} />
        <Route path="/create" element={<CreateItem />} />
        <Route path="/edit/:id" element={<EditItem />} />
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
}
