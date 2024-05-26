import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { MainLogo } from "../../../assets";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts";
export const NavbarContent = () => {
  const { signout, currentUser } = useAuth();
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <MainLogo
            fill="#005199"
            className="mr-3 h-6 sm:h-9 w-20 sm:w-[unset]"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block truncate text-sm font-medium">
                {currentUser?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item as="span">
              <Link to="/profile">Profile</Link>
            </Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item as="span" onClick={() => signout()}>
              <Link to="/auth"> Sign out</Link>
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link as={Link} to="/dashboard" active>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} to="/create-gallery">
            Create Gallery
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
