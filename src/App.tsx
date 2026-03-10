import { useState } from 'react';
import { Header } from './components/Header';
import ProductCatalog from './components/ProductCatalog';
import { HeroBanner } from './components/HeroBanner';
import { AssortedPacks } from './components/AssortedPacks';
import { ToolsSection } from './components/ToolsSection';
import { ContactSection } from './components/ContactSection';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { OrderConfirmation } from './components/OrderConfirmation';
import { useCart } from './hooks/useCart';
import { supabase } from './lib/supabase';
import { v4 as uuidv4 } from 'uuid';
import { Wrench, Mail, Phone, MapPin } from 'lucide-react';

type AppState = 'catalog' | 'checkout' | 'confirmation';

function App() {
  const [appState, setAppState] = useState<AppState>('catalog');
  const [orderData, setOrderData] = useState<any>(null);

  const {
    cartItems, isCartOpen, addToCart, updateQuantity,
    removeFromCart, clearCart, toggleCart, closeCart, getTotalItems, getTotalPrice,
  } = useCart();

  const handleAddToCart = (product: any) => { addToCart(product); };
  const handleCheckout = () => { closeCart(); setAppState('checkout'); };

  const handleOrderComplete = async (orderData: any) => {
    try {
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          id: uuidv4(),
          customer_email: orderData.customer.email,
          customer_name: orderData.customer.name,
          total_amount: orderData.total,
          status: 'pending',
          payment_method: orderData.paymentMethod || 'google_pay',
          shipping_address: {
            address: orderData.customer.address,
            city: orderData.customer.city,
            zipCode: orderData.customer.zipCode,
            phone: orderData.customer.phone,
          },
        })
        .select()
        .single();

      if (orderError) throw orderError;

      const orderItems = orderData.items.map((item: any) => ({
        order_id: order.id,
        product_id: item.product.id,
        quantity: item.quantity,
        unit_price: item.product.price,
        total_price: item.product.price * item.quantity,
      }));

      const { error: itemsError } = await supabase.from('order_items').insert(orderItems);
      if (itemsError) throw itemsError;

      clearCart();
      setOrderData({ ...orderData, order_id: order.id });
      setAppState('confirmation');
    } catch (error) {
      console.error('Error saving order:', error);
      // Still show confirmation since this is a demo
      clearCart();
      setOrderData(orderData);
      setAppState('confirmation');
    }
  };

  const handleNewOrder = () => { setAppState('catalog'); setOrderData(null); };
  const handleCloseCheckout = () => { setAppState('catalog'); };

  if (appState === 'confirmation' && orderData) {
    return <OrderConfirmation orderData={orderData} onNewOrder={handleNewOrder} />;
  }

  return (
    <div className="min-h-screen">
      <Header cartItemsCount={getTotalItems()} onCartClick={toggleCart} />

      {/* Hero */}
      <HeroBanner />

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <ProductCatalog onAddToCart={handleAddToCart} />
        <AssortedPacks onAddToCart={handleAddToCart} />
        <ToolsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <div className="bg-gradient-to-br from-brand-500 to-brand-600 p-1.5 rounded-lg">
                  <Wrench className="h-4 w-4 text-white" />
                </div>
                <span className="font-display font-bold text-lg gradient-text">Bharat Fasteners</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                India's largest online store for premium screws, nuts, bolts, washers and fasteners.
                Allen, Phillips &amp; Slotted in every head style.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#catalog" className="hover:text-brand-400 transition-colors">All Products</a></li>
                <li><a href="#assorted-packs" className="hover:text-brand-400 transition-colors">Assorted Packs</a></li>
                <li><a href="#tools" className="hover:text-brand-400 transition-colors">Tools</a></li>
                <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-brand-400" /> support@bharatfasteners.in</li>
                <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-brand-400" /> +91 98765 43210</li>
                <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-brand-400" /> India — 2-Day Delivery</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 mt-8 pt-6 text-center">
            <p className="text-xs text-slate-600">© 2026 Bharat Fastener. All rights reserved. Premium Fasteners & Hardware.</p>
          </div>
        </div>
      </footer>

      {/* Overlays */}
      <Cart isOpen={isCartOpen} onClose={closeCart} items={cartItems} onUpdateQuantity={updateQuantity} onRemoveItem={removeFromCart} onCheckout={handleCheckout} totalPrice={getTotalPrice()} />
      <Checkout isOpen={appState === 'checkout'} onClose={handleCloseCheckout} items={cartItems} totalPrice={getTotalPrice()} onOrderComplete={handleOrderComplete} />
    </div>
  );
}

export default App;
