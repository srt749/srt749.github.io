    class Window_ItemList < Window_Selectable
      
      def initialize(x, y, width, height)
        super
        @category = :none
        @data = []
        refresh
        self.oy = 0
      end
      
      def include?(item)
        return true if item
      end
    end

    class Scene_Item < Scene_ItemBase
      def start
        super
        create_help_window
        create_item_window
      end
      
      def create_item_window
        wy = @help_window.y + @help_window.height
        wh = Graphics.height - wy
        @item_window = Window_ItemList.new(0, wy, Graphics.width, wh)
        @item_window.viewport = @viewport
        @item_window.help_window = @help_window
        @item_window.set_handler(:ok,     method(:on_item_ok))
        @item_window.set_handler(:cancel, method(:on_item_cancel))
        @item_window.select_last
        @item_window.activate
      end
      
      def on_item_cancel
        return_scene
      end
    end

     

