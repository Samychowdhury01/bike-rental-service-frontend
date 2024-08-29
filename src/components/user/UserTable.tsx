import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetAllUsersQuery,
  usePromoteUserMutation,
  useRemoveUserMutation,
} from "@/redux/api/user/userApi";
import { Button } from "../ui/button";
import Spinner from "../ui/Spinner";
import Swal from "sweetalert2";

const UserTable = () => {
  const { data, isLoading } = useGetAllUsersQuery("");
  const [promoteUser] = usePromoteUserMutation();
  const [removeUser] = useRemoveUserMutation();
  const [promotingUserId, setPromotingUserId] = useState("");
  const [deletingUserId, setDeletingUserId] = useState("");

  // handle promote user
  const handlePromoteUser = async (id: string) => {
    setPromotingUserId(id);
    const response = await promoteUser(id);

    if (response.data) {
      Swal.fire({
        icon: "success",
        title: "User promoted successfully",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: response.error.data.message || "Something went wrong!",
      });
    }

    setPromotingUserId(""); // Reset promoting state
  };
  // handle promote user
  const handleDeleteUser = async (id: string) => {
    setDeletingUserId(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await removeUser(id).unwrap();
        if (response.data) {
          Swal.fire({
            icon: "success",
            title: "User Deleted successfully",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: response.error.data.message || "Something went wrong!",
          });
        }
      }
    });

    setDeletingUserId(""); // Reset promoting state
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.data.map((user) => (
          <TableRow key={user._id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button
                  onClick={() => handlePromoteUser(user._id)}
                  variant="outline"
                  size="sm"
                  disabled={
                    promotingUserId === user._id || user.role === "admin"
                  }
                >
                  {promotingUserId === user._id ? <Spinner /> : "Promote"}
                </Button>
                <Button
                  onClick={() => handleDeleteUser(user._id)}
                  variant="destructive"
                  size="sm"
                  disabled={deletingUserId === user._id}
                >
                  {deletingUserId === user._id ? <Spinner /> : "Delete"}
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
