"use client";

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const UserMenu = ({ currentUser }) => {
  const isAdmin = currentUser?.role === "ADMIN";
  const currentRoute = usePathname();

  return (
    <>
      {!currentUser && (
        <div className="option-item">
          <Link href="/auth" className="default-btn">
            <i className="flaticon-user"></i> Login/Register <span></span>
          </Link>
        </div>
      )}
      {currentUser && (
        <>
          <div className="option-item">
            {/* <button
							className="default-btn"
							onClick={() => signOut()}
						>
							<i className="flaticon-user"></i> Logout{" "}
							<span></span>
						</button> */}

            <div className="dropdown profile-dropdown">
              <div className="img ptb-15">
                <Image
                  src="https://res.cloudinary.com/dev-empty/image/upload/v1661245253/wqsnxv0pfdwl2abdakf5.jpg"
                  alt="Admin"
                  width={35}
                  height={35}
                />
              </div>

              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item author-dropdown-item"
                    href="/profile/basic-information/"
                  >
                    <div class="d-flex align-items-center">
                      <div className="img">
                        <Image
                          src="https://res.cloudinary.com/dev-empty/image/upload/v1661245253/wqsnxv0pfdwl2abdakf5.jpg"
                          alt="Admin"
                          width={35}
                          height={35}
                        />
                      </div>

                      <span className="ps-3">
                        <span className="fw-semibold fs-16 mb-1 d-block">
                          Admin
                        </span>
                        <span className="d-block fs-13 mt-minus-2">
                          admin@elearniv.com
                        </span>
                      </span>
                    </div>
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <Link className="dropdown-item" href="/admin/">
                    <i className="bx bxs-dashboard"></i> My Dashboard
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" href="/learning/my-courses/">
                    <i className="bx bx-book"></i>My Learning
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    href="/learning/my-purchase-history/"
                  >
                    <i className="bx bx-credit-card-front"></i>My Purchases
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" href="/learning/wishlist/">
                    <i className="bx bxs-heart"></i>Wishlist
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    href="/profile/basic-information/"
                  >
                    <i className="bx bx-user-circle"></i> Account settings
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <button
                    type="submit"
                    className="dropdown-item"
                    onClick={() => signOut()}
                  >
                    <i className="bx bx-log-out"></i> Log out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserMenu;
