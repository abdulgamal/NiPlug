"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { paySuccess } from "../../../../requests";
import Loading from "@/components/Loading";

function Index() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSuccess = async (id) => {
    setLoading(true);
    try {
      let res = await paySuccess(id);
      if (res?.code === 200) {
        setData(res?.message);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (id) {
      handleSuccess(id);
    }
  }, [id]);
  return (
    <section className="h-screen py-7">
      {data && (
        <>
          <h2 className="text-xl text-center md:text-3xl my-4">
            Payment Success For:
            <br /> {data?.name}
          </h2>
          <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-50 py-12 md:py-24">
              <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
                <div className="flex items-center gap-4">
                  <img
                    src="https://res.cloudinary.com/dinfpnmrf/image/upload/v1684594826/dukaapp/ymusvqugr2sck88mmp5r.png"
                    className="h-6 mr-3 sm:h-9"
                    alt="Logo"
                  />
                </div>

                <div>
                  <p className="text-2xl font-medium tracking-tight text-gray-900">
                    Order Details
                  </p>
                </div>
                <div>
                  <div className="flow-root">
                    <p className="flex items-start -mx-2">
                      <span className="mx-2 text-gray-700">Payment Type:</span>
                      <span className="mx-2 text-gray-400">
                        Digital Payment
                      </span>
                    </p>
                    <p className="flex items-start -mx-2">
                      <span className="mx-2 text-gray-700">
                        Payment Gateway:
                      </span>
                      <span className="mx-2 text-gray-400">
                        {data?.payment_gateway}
                      </span>
                    </p>
                    <p className="flex items-start -mx-2">
                      <span className="mx-2 text-gray-700">
                        Payment Status:
                      </span>
                      <span className="mx-2 text-gray-400">
                        {data?.payment_status}
                      </span>
                    </p>
                    <p className="flex items-start -mx-2">
                      <span className="mx-2 text-gray-700">Order Status:</span>
                      <span className="mx-2 text-gray-400">{data?.status}</span>
                    </p>
                    <p className="flex items-start -mx-2">
                      <span className="mx-2 text-gray-700">Owner Number:</span>
                      <span className="mx-2 text-gray-400">{data?.phone}</span>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-medium tracking-tight text-gray-900">
                    Billing Details
                  </p>
                </div>
                <div>
                  <div className="flow-root">
                    <p className="flex items-start -mx-2">
                      <span className="mx-2 text-gray-700">Name:</span>
                      <span className="mx-2 text-gray-400">{data?.name}</span>
                    </p>
                    <p className="flex items-start -mx-2">
                      <span className="mx-2 text-gray-700">Email:</span>
                      <span className="mx-2 text-gray-400">{data?.email}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white py-12 md:py-24">
              <div className="mx-auto max-w-lg px-4 lg:px-8">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                    <thead>
                      <tr>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"></th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                          Quantity
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                          Price
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          Tax
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          %
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          Shipping
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          Kes 0
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          Subtotal
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          Kes {data?.total_amount}
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          Total
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          Kes {data?.total_amount}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Link
                  href="/"
                  className="block w-full rounded-md bg-blue-500 text-center p-2.5 my-3 text-sm text-white transition hover:shadow-lg"
                >
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      {loading && <Loading />}
    </section>
  );
}

export default Index;
