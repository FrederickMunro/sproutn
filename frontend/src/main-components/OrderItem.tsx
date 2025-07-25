import { IoArrowBackOutline, IoCloudDownloadOutline } from "react-icons/io5";
import { Order } from "./interfaces";
import { useUser } from "./UserContext";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuBoxes } from "react-icons/lu";
import { HiDownload } from "react-icons/hi";
import { MdOutlineLock } from "react-icons/md";

interface Props {
  order: Order;
  setSelectedOrder: Function;
}

const OrderItem = ({ order, setSelectedOrder }: Props) => {
  const { user } = useUser();

  return(
    <div className='projects-order-container'>
      <div className='projects-order-selected-return-container' onClick={() => setSelectedOrder(-1)}>
        <IoArrowBackOutline />
        <p className='projects-order-selected-return-title'>Back to order list</p>
      </div>
      <div className='projects-prototype-container-container'>
        <div className='project-order-subcontainer'>
          <div className='project-order-subcontainer-title'>
            {`Order #${order.id}`}
          </div>
          <div className={`dashboard-project-header-status-container ${order.status.toLowerCase().replace(/ /g, '-')}`}>
            <div className={`dashboard-project-header-status-circle ${order.status.toLowerCase().replace(/ /g, '-')}-dot`} />
            <p className='dashboard-project-header-status-text'>{order.status}</p>
          </div>
        </div>
        <div className='projects-prototype-subcontainer-container'>
          <div className='projects-prototype-subcontainer'>
            <div className='projects-prototype-title-container'>
              <LuBoxes />
              <h4 className='projects-prototype-item-title'>Manufacturing progress</h4>
            </div>
            <div className='projects-prototype-manufacturing-container'>

            </div>
            <p className='projects-prototype-change-address'>More details</p>
          </div>
          <div className='projects-prototype-subcontainer'>
            <div className='projects-prototype-title-container'>
            <LiaShippingFastSolid />
              <h4 className='projects-prototype-item-title'>Track your shipment</h4>
            </div>
            <div className='projects-prototype-subtext-container'>
              <p className='projects-prototype-subtext'>Recipient address:</p>
              <p className='projects-prototype-subtext'>{`${user.firstName} ${user.lastName}`}</p>
              <p className='projects-prototype-subtext'>{order.shippingAddress}</p>
            </div>
            <p className='projects-prototype-change-address'>Change delivery address</p>
            <div className='projects-prototype-shipping-container'>

            </div>
            <p className='projects-prototype-change-address'>More details</p>
          </div>
        </div>
        <div className='projects-prototype-subcontainer-large'>
          <div className='projects-prototype-title-container'>
            <IoCloudDownloadOutline />
            <h4 className='projects-prototype-item-title'>Download your documents</h4>
          </div>
          <p className='projects-prototype-cloud-subtext'>Find your documents below</p>
          <div className={`projects-prototype-image-container ${order.billingLocked ? 'noavail' : ''}`}>
            <p className='projects-prototype-image-text'>Billing</p>
            { order.billingLocked ? <MdOutlineLock /> : <HiDownload /> }
          </div>
          <div className={`projects-prototype-image-container ${order.processLocked ? 'noavail' : ''}`}>
            <p className='projects-prototype-image-text'>Manufacturing process</p>
            { order.processLocked ? <MdOutlineLock /> : <HiDownload /> }
          </div>
          <div className={`projects-prototype-image-container ${order.contractLocked ? 'noavail' : ''}`}>
            <p className='projects-prototype-image-text'>Contract</p>
            { order.contractLocked ? <MdOutlineLock /> : <HiDownload /> }
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderItem;
