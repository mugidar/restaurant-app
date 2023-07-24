const page = () => {
  return (
    <div className="container">
      <table className="w-full border-separate border-spacing-2">
        <thead >
          <tr >
            <th className="text-start hidden lg:block">Order ID</th>
            <th className="text-start">Date</th>
            <th className="text-start">Price</th>
            <th className="text-start hidden lg:block">Order</th>
            <th className="text-start">Status</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="bg-red-400">
            <td className="hidden lg:block">1234567899</td>
            <td className="">19.07.2023</td>
            <td className="">89.98</td>
            <td className="hidden lg:block">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, totam?</td>
            <td className="">Not Deliveried</td>
          </tr>
          <tr className="odd:bg-neutral-400">
            <td className="hidden lg:block">1234567899</td>
            <td className="">19.07.2023</td>
            <td className="">89.98</td>
            <td className="hidden lg:block">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, totam?</td>
            <td className="">Deliveried</td>
          </tr>
          <tr className="odd:bg-neutral-400">
            <td className="hidden lg:block">1234567899</td>
            <td className="">19.07.2023</td>
            <td className="">89.98</td>
            <td className="hidden lg:block">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, totam?</td>
            <td className="">Deliveried</td>
          </tr>
          <tr className="odd:bg-neutral-400">
            <td className="hidden lg:block">1234567899</td>
            <td className="">19.07.2023</td>
            <td className="">89.98</td>
            <td className="hidden lg:block">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, totam?</td>
            <td className="">Deliveried</td>
          </tr>
          <tr className="odd:bg-neutral-400">
            <td className="hidden lg:block">1234567899</td>
            <td className="">19.07.2023</td>
            <td className="">89.98</td>
            <td className="hidden lg:block">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, totam?</td>
            <td className="">Deliveried</td>
          </tr>
    
        </tbody>
      </table>
    </div>
  );
};

export default page;
