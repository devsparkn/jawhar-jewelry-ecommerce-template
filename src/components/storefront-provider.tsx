"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type DrawerType = "cart" | "wishlist" | "account" | null;
type AuthView = "login" | "signup";

type CartItem = {
  id: string;
  slug: string;
  quantity: number;
  selections?: Record<string, string>;
};

type UserAccount = {
  firstName: string;
  lastName: string;
  email: string;
};

type AuthPayload = {
  firstName?: string;
  lastName?: string;
  email: string;
};

type StorefrontContextValue = {
  cartItems: CartItem[];
  wishlist: string[];
  user: UserAccount | null;
  activeDrawer: DrawerType;
  authView: AuthView;
  cartCount: number;
  wishlistCount: number;
  openDrawer: (drawer: Exclude<DrawerType, null>, authView?: AuthView) => void;
  closeDrawer: () => void;
  addToCart: (
    slug: string,
    quantity?: number,
    selections?: Record<string, string>,
  ) => void;
  removeFromCart: (id: string) => void;
  updateCartQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  addToWishlist: (slug: string) => void;
  removeFromWishlist: (slug: string) => void;
  toggleWishlist: (slug: string) => void;
  login: (payload: AuthPayload) => void;
  signup: (payload: AuthPayload) => void;
  logout: () => void;
};

const StorefrontContext = createContext<StorefrontContextValue | undefined>(
  undefined,
);

const CART_STORAGE_KEY = "jawhar-cart";
const WISHLIST_STORAGE_KEY = "jawhar-wishlist";
const USER_STORAGE_KEY = "jawhar-user";

function readStorageValue<T>(key: string, fallback: T) {
  if (typeof window === "undefined") {
    return fallback;
  }

  const rawValue = window.localStorage.getItem(key);

  if (!rawValue) {
    return fallback;
  }

  return JSON.parse(rawValue) as T;
}

function serializeSelections(selections?: Record<string, string>) {
  if (!selections || Object.keys(selections).length === 0) {
    return "";
  }

  return Object.entries(selections)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, value]) => `${key}:${value}`)
    .join("|");
}

function createCartItemId(slug: string, selections?: Record<string, string>) {
  const selectionSignature = serializeSelections(selections);
  return selectionSignature ? `${slug}::${selectionSignature}` : slug;
}

function normalizeCartItems(items: CartItem[]) {
  return items.map((item) => ({
    id: item.id ?? createCartItemId(item.slug, item.selections),
    slug: item.slug,
    quantity: item.quantity,
    selections: item.selections,
  }));
}

export function StorefrontProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() =>
    normalizeCartItems(readStorageValue(CART_STORAGE_KEY, [])),
  );
  const [wishlist, setWishlist] = useState<string[]>(() =>
    readStorageValue(WISHLIST_STORAGE_KEY, []),
  );
  const [user, setUser] = useState<UserAccount | null>(() =>
    readStorageValue<UserAccount | null>(USER_STORAGE_KEY, null),
  );
  const [activeDrawer, setActiveDrawer] = useState<DrawerType>(null);
  const [authView, setAuthView] = useState<AuthView>("login");
  const isHydrated = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (user) {
      window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      return;
    }

    window.localStorage.removeItem(USER_STORAGE_KEY);
  }, [user]);

  function openDrawer(drawer: Exclude<DrawerType, null>, nextAuthView?: AuthView) {
    setActiveDrawer(drawer);

    if (nextAuthView) {
      setAuthView(nextAuthView);
    }
  }

  function closeDrawer() {
    setActiveDrawer(null);
  }

  function addToCart(
    slug: string,
    quantity = 1,
    selections?: Record<string, string>,
  ) {
    const itemId = createCartItemId(slug, selections);

    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === itemId);

      if (!existingItem) {
        return [...currentItems, { id: itemId, slug, quantity, selections }];
      }

      return currentItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      );
    });

    setActiveDrawer("cart");
  }

  function removeFromCart(id: string) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id),
    );
  }

  function updateCartQuantity(id: string, quantity: number) {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      ),
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  function addToWishlist(slug: string) {
    setWishlist((currentWishlist) => {
      if (currentWishlist.includes(slug)) {
        return currentWishlist;
      }

      return [...currentWishlist, slug];
    });

    setActiveDrawer("wishlist");
  }

  function removeFromWishlist(slug: string) {
    setWishlist((currentWishlist) =>
      currentWishlist.filter((wishlistSlug) => wishlistSlug !== slug),
    );
  }

  function toggleWishlist(slug: string) {
    setWishlist((currentWishlist) => {
      if (currentWishlist.includes(slug)) {
        return currentWishlist.filter((wishlistSlug) => wishlistSlug !== slug);
      }

      setActiveDrawer("wishlist");
      return [...currentWishlist, slug];
    });
  }

  function login(payload: AuthPayload) {
    setUser({
      firstName: payload.firstName ?? "Jawhar",
      lastName: payload.lastName ?? "Client",
      email: payload.email,
    });
    setAuthView("login");
    setActiveDrawer(null);
  }

  function signup(payload: AuthPayload) {
    setUser({
      firstName: payload.firstName ?? "Jawhar",
      lastName: payload.lastName ?? "Client",
      email: payload.email,
    });
    setAuthView("signup");
    setActiveDrawer(null);
  }

  function logout() {
    setUser(null);
    setActiveDrawer(null);
  }

  const visibleCartItems = isHydrated ? cartItems : [];
  const visibleWishlist = isHydrated ? wishlist : [];
  const visibleUser = isHydrated ? user : null;

  const value: StorefrontContextValue = {
    cartItems: visibleCartItems,
    wishlist: visibleWishlist,
    user: visibleUser,
    activeDrawer,
    authView,
    cartCount: visibleCartItems.reduce(
      (count, item) => count + item.quantity,
      0,
    ),
    wishlistCount: visibleWishlist.length,
    openDrawer,
    closeDrawer,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    login,
    signup,
    logout,
  };

  return (
    <StorefrontContext.Provider value={value}>
      {children}
    </StorefrontContext.Provider>
  );
}

export function useStorefront() {
  const context = useContext(StorefrontContext);

  if (!context) {
    throw new Error("useStorefront must be used within StorefrontProvider");
  }

  return context;
}
