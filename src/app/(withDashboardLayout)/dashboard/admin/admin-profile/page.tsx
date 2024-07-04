"use client";
import Image from "next/image";
import LockResetIcon from "@mui/icons-material/LockReset";
import { useState } from "react";

import Link from "next/link";
import { getUserInfo } from "@/services/auth.service";
import { TUser } from "@/types";
import { useGetAllProjectsQuery } from "@/redux/api/projects/projectsApi";
import { useGetAllBlogsQuery } from "@/redux/api/blogs/blogsApi";
import Loader from "@/components/shared/Loader/Loader";

const AdminProfile = () => {
  const { data: projects, isLoading } = useGetAllProjectsQuery({});
  const { data: blogs, isLoading: blogLoading } = useGetAllBlogsQuery({});
  const [open, setOpen] = useState<boolean>(false);
  const user = getUserInfo() as TUser;

  return (
    <div className="">
      {isLoading ? (
        <Loader />
      ) : (
        <main className="profile-page ">
          <section className="relative block h-[500px] ">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                width: "100%",
                height: "400px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              style={{ transform: "translateZ(0px)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
          <section className="relative py-16 bg-blueGray-200">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <Image
                          alt="profilePhoto"
                          src="https://i.ibb.co/bLw6X0m/blank-profile-picture-973460-1280.png"
                          className="shadow-xl rounded-full  align-middle border-none absolute -m-16 -ml-12 lg:-ml-56 max-w-[115px]"
                          width={200}
                          height={100}
                        />
                      </div>
                    </div>

                    <div className="w-full lg:w-4/12 px-4 lg:order-1 mb-20"></div>
                  </div>
                  <div className="text-center mt-1 ">
                    <h3 className="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2">
                      {user?.name}
                    </h3>

                    <div className="mb-2 text-blueGray-600 mt-5">
                      <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                      Email - {user?.email}
                    </div>
                  </div>
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {projects?.length}
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Total Projects
                      </span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {blogs?.length}
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Total Blogs
                      </span>
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          I am a passionate full-stack developer specializing in
                          the MERN stack, with expertise in both SQL and NoSQL
                          databases. I excel in building scalable, responsive
                          web applications and solving complex coding
                          challenges. Continuously learning and adapting, I
                          thrive on staying at the forefront of modern web
                          technologies to deliver innovative solutions and
                          enhance user experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8"></footer>
          </section>
        </main>
      )}
    </div>
  );
};

export default AdminProfile;