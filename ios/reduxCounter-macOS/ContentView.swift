//
//  ContentView.swift
//  reduxCounter-macOS
//
//  Created by MacBook Pro (Abroaders, Watthajak) on 10/7/2562 BE.
//  Copyright © 2562 Facebook. All rights reserved.
//

import SwiftUI

struct ContentView : View {
    var body: some View {
        Text("Hello World")
            .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
}


#if DEBUG
struct ContentView_Previews : PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
#endif
