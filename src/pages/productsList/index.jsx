import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Button from "../../components/button";
import { instance } from "../../libs/axiosInstance";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from "../../components/pagination";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//
//------------------------------ADD PRODUCT MODAL-------------------------------
const AddProduct = ({ isOpen, setIsOpen, products, setProducts }) => {
  const [imageValue, setImageValue] = useState();
  const {
    register,
    handleSubmit,

    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const accessToken = useSelector(
    (state) => state.adminAuth.adminAuth.accessToken
  );
  const addProductSubmitHandler = (e) => {
    const bodyFormData = new FormData();
    bodyFormData.append("name", e.name);
    bodyFormData.append("brand", e.brand);
    bodyFormData.append("price", e.price);
    bodyFormData.append("image", e.image);
    bodyFormData.append("quantity", e.quantity);

    console.log(e);
    instance
      .post("/products", bodyFormData)
      .then((res) => {
        setProducts([...products, res.data]);
        setIsOpen(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {isOpen && (
        <div
          onClick={(e) => {
            setIsOpen(false);
          }}
          className="min-h-[100vh] bg-black bg-opacity-60 w-full fixed top-0 right-0 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[60%] h-[80vh]   md:w-[45%]  mt-16 m-auto rounded-xl bg-backgrey py-12"
          >
            <form
              onSubmit={handleSubmit(addProductSubmitHandler)}
              className="flex flex-col w-4/5  mx-auto  border-backgrey border-2 gap-2 rounded-[10px] shadow-lg"
            >
              <label htmlFor="name">نام محصول:</label>
              <input
                className="h-[43px] w-4/5  rounded-[10px] border-2 border-backgrey pr-4"
                {...register("name", {
                  required: "این فیلد اجباری می باشد",
                })}
                type="text"
                placeholder="نام محصول..."
              />
              {errors.name && (
                <p className="text-xs text-primary">{errors.name.message}</p>
              )}

              <label htmlFor="brand">دسته بندی:</label>
              <input
                className="h-[43px] w-4/5  rounded-[10px] border-2 border-backgrey pr-4"
                {...register("brand", {
                  required: "این فیلد اجباری می باشد",
                })}
                type="text"
                placeholder="دسته بندی..."
              />
              {errors.brand && (
                <p className="text-xs text-primary">{errors.brand.message}</p>
              )}
              <label htmlFor="price">قیمت:</label>

              <input
                className="h-[43px] w-4/5  rounded-[10px] border-2 border-backgrey pr-4"
                {...register("price", {
                  required: "این فیلد اجباری می باشد",
                })}
                type="number"
                placeholder="قیمت..."
              />
              {errors.price && (
                <p className="text-xs text-primary">{errors.price.message}</p>
              )}
              <label htmlFor="quantity">موجودی:</label>

              <input
                className="h-[43px] w-4/5  rounded-[10px] border-2 border-backgrey pr-4"
                {...register("quantity", {
                  required: "این فیلد اجباری می باشد",
                })}
                type="number"
                min={0}
                placeholder="موجودی..."
              />
              {errors.price && (
                <p className="text-xs text-primary">{errors.price.message}</p>
              )}
              <label htmlFor="image">تصویر:</label>

              <input
                className="h-[43px] w-4/5  rounded-[10px] border-2 border-backgrey pr-4"
                // {...register("image", {
                //   required: "این فیلد اجباری می باشد",
                // })}
                type="file"
                placeholder="تصویر..."
                onChange={(e) => {
                  setValue("image", e.target.files[0]);
                  setImageValue(e.target.value);
                }}
                value={imageValue}
              />

              {errors.image && (
                <p className="text-xs text-primary">{errors.image.message}</p>
              )}
              <Button type="submit">اضافه محصول</Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//
//------------------------------EDIT PRODUCT MODAL-------------------------------

const EditProduct = ({ isOpen, setIsOpen, data, products, setProducts }) => {
  const [imageValue, setImageValue] = useState();
  const {
    register,
    handleSubmit,

    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const accessToken = useSelector(
    (state) => state.adminAuth.adminAuth.accessToken
  );
  const editProductSubmitHandler = (e) => {
    console.log(e);
    instance
      .put(
        `/products/${data.id}`,
        { ...data, ...e },
        {
          headers: {
            token: accessToken,
          },
        }
      )
      .then((res) => {
        setProducts(
          products.map((product) => {
            if (product.id === data.id) {
              return res.data;
            }
            return product;
          })
        );
        setIsOpen(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {console.log(data)}
      {isOpen && (
        <div
          onClick={(e) => {
            setIsOpen(false);
          }}
          className="min-h-[100vh] bg-black bg-opacity-60 w-full fixed top-0 right-0 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[60%] h-[80vh]   md:w-[45%]  mt-16 m-auto rounded-xl bg-backgrey py-12"
          >
            <form
              onSubmit={handleSubmit(editProductSubmitHandler)}
              className="flex flex-col w-4/5  mx-auto  border-backgrey border-2 gap-2 rounded-[10px] shadow-lg"
            >
              <label htmlFor="name">نام محصول:</label>
              <input
                className="h-[43px] w-4/5  rounded-[10px] border-2 border-backgrey pr-4"
                {...register("name", {
                  required: "این فیلد اجباری می باشد",
                })}
                type="text"
                placeholder="نام محصول..."
                defaultValue={data.name}
              />
              {errors.name && (
                <p className="text-xs text-primary">{errors.name.message}</p>
              )}

              <label htmlFor="brand">دسته بندی:</label>
              <input
                className="h-[43px] w-4/5  rounded-[10px] border-2 border-backgrey pr-4"
                {...register("brand", {
                  required: "این فیلد اجباری می باشد",
                })}
                type="text"
                placeholder="دسته بندی..."
                defaultValue={data.brand}
              />
              {errors.brand && (
                <p className="text-xs text-primary">{errors.brand.message}</p>
              )}
              <label htmlFor="price">قیمت:</label>

              <input
                className="h-[43px] w-4/5  rounded-[10px] border-2 border-backgrey pr-4"
                {...register("price", {
                  required: "این فیلد اجباری می باشد",
                })}
                type="number"
                placeholder="قیمت..."
                defaultValue={data.price}
              />
              {errors.price && (
                <p className="text-xs text-primary">{errors.price.message}</p>
              )}
              <label htmlFor="quantity">موجودی:</label>

              <input
                className="h-[43px] w-4/5  rounded-[10px] border-2 border-backgrey pr-4"
                {...register("quantity", {
                  required: "این فیلد اجباری می باشد",
                })}
                type="number"
                min={0}
                placeholder="موجودی..."
                defaultValue={data.quantity}
              />
              {errors.price && (
                <p className="text-xs text-primary">{errors.price.message}</p>
              )}
              <label htmlFor="image">تصویر:</label>

              <input
                className="h-[43px] w-4/5  rounded-[10px] border-2 border-backgrey pr-4"
                // {...register("image", {
                //   required: "این فیلد اجباری می باشد",
                // })}
                type="file"
                placeholder="تصویر..."
                onChange={(e) => {
                  setValue("image", e.target.files[0]);
                  setImageValue(e.target.value);
                }}
                value={imageValue}
              />

              {errors.image && (
                <p className="text-xs text-primary">{errors.image.message}</p>
              )}
              <Button type="submit" className="bg-secondary">
                ویرایش
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//------------------------------MAIN COMPONENT-------------------------------
const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editProductData, setEditProductData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductssPerPage] = useState(5);

  const accessToken = useSelector(
    (state) => state.adminAuth.adminAuth.accessToken
  );

  const productsGetter = () => {
    instance
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(productsGetter, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPage = Math.ceil(products.length / productsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const rightPaginate = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const leftPaginate = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="flex flex-col items-center my-16 gap-8">
      {isAddModalOpen && (
        <AddProduct
          isOpen={isAddModalOpen}
          setIsOpen={setIsAddModalOpen}
          products={products}
          setProducts={setProducts}
        />
      )}
      {isEditModalOpen && (
        <EditProduct
          products={products}
          setProducts={setProducts}
          isOpen={isEditModalOpen}
          setIsOpen={setIsEditModalOpen}
          data={editProductData}
        />
      )}
      <p>مدیریت محصولات:</p>

      <table className=" w-4/5 mx-auto  border border-secondary rounded-lg text-center ">
        <thead className="w-full">
          <tr className="w-full bg-tertiary text-white h-12">
            <td>نام محصول</td>
            <td>قیمت</td>
            <td>موجودی</td>
            <td>ویرایش</td>
            <td>حذف</td>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((item, index) => {
            return (
              <tr
                className={index % 2 === 0 ? "bg-backgrey h-9" : "h-9"}
                key={item.id}
              >
                <td className="border-l border-tertiary">{item.name}</td>
                <td className="border-l border-tertiary">
                  <button
                    className=" bg-secondary text-white px-[5px] w-[20px] rounded-[10px] mx-2"
                    onClick={() => {
                      instance
                        .put(
                          `/products/${item.id}`,
                          {
                            ...item,
                            price: +item.price + 1,
                          },
                          {
                            headers: {
                              token: accessToken,
                            },
                          }
                        )
                        .then((res) =>
                          setProducts(
                            products.map((product) => {
                              if (product.id === item.id) {
                                return {
                                  ...product,
                                  price: res.data.price,
                                };
                              } else {
                                return product;
                              }
                            })
                          )
                        );
                    }}
                  >
                    +
                  </button>
                  {(+item.price).toLocaleString("fa-IR")}
                  <button
                    className=" bg-secondary text-white w-[20px] px-[5px] rounded-[10px] mx-2"
                    onClick={() => {
                      instance
                        .put(
                          `/products/${item.id}`,
                          {
                            ...item,
                            price: +item.price - 1,
                          },
                          {
                            headers: {
                              token: accessToken,
                            },
                          }
                        )
                        .then((res) =>
                          setProducts(
                            products.map((product) => {
                              if (product.id === item.id) {
                                return {
                                  ...product,
                                  price: res.data.price,
                                };
                              } else {
                                return product;
                              }
                            })
                          )
                        );
                    }}
                  >
                    -
                  </button>
                </td>
                <td className="border-l border-tertiary">
                  <button
                    className=" bg-secondary text-white px-[5px] w-[20px] rounded-[10px] mx-2"
                    onClick={() => {
                      instance
                        .put(
                          `/products/${item.id}`,
                          {
                            ...item,
                            quantity: item.quantity ? +item.quantity + 1 : 1,
                          },
                          {
                            headers: {
                              token: accessToken,
                            },
                          }
                        )
                        .then((res) =>
                          setProducts(
                            products.map((product) => {
                              if (product.id === item.id) {
                                return {
                                  ...product,
                                  quantity: res.data.quantity,
                                };
                              } else {
                                return product;
                              }
                            })
                          )
                        );
                    }}
                  >
                    +
                  </button>
                  {item.quantity}
                  <button
                    className=" bg-secondary text-white px-[5px] w-[20px] rounded-[10px] mx-2"
                    onClick={() => {
                      instance
                        .put(
                          `/products/${item.id}`,
                          {
                            ...item,
                            quantity:
                              item.quantity > 0 ? +item.quantity - 1 : 0,
                          },
                          {
                            headers: {
                              token: accessToken,
                            },
                          }
                        )
                        .then((res) =>
                          setProducts(
                            products.map((product) => {
                              if (product.id === item.id) {
                                return {
                                  ...product,
                                  quantity: res.data.quantity,
                                };
                              } else {
                                return product;
                              }
                            })
                          )
                        );
                    }}
                  >
                    -
                  </button>
                </td>
                <td className=" text-primary border-l border-tertiary">
                  <button>
                    <FaEdit
                      className="mx-auto"
                      onClick={function () {
                        setIsEditModalOpen(true);
                        setEditProductData(item);
                      }}
                    />
                  </button>
                </td>
                <td className="text-primary">
                  <button>
                    <RiDeleteBin6Line
                      className="mx-auto"
                      onClick={() => {
                        instance
                          .delete(`/products/${item.id}`, {
                            headers: { token: accessToken },
                          })
                          .then((res) =>
                            setProducts(
                              products.filter(
                                (product) => product.id !== item.id
                              )
                            )
                          )
                          .catch((err) => console.log(err));
                      }}
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        rightPaginate={rightPaginate}
        leftPaginate={leftPaginate}
      />
      <Button className=" w-[300px]" onClick={() => setIsAddModalOpen(true)}>
        افزودن کالا
      </Button>
    </div>
  );
};

export default ProductsList;
